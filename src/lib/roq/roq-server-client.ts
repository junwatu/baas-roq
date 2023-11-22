
import { RoqBaasSdk } from "./roq-baas-sdk"
import { Platform } from '@roq/nodejs'
import { NextApiRequest } from "next"
import { cookies } from 'next/headers'

export type ExtendedPlatform = Omit<Platform, 'asUser'> & {
  asUser(): ReturnType<Platform['asUser']>
}

export class RoqServerClient {
  private backendHost: string
  public roqPlatform: ExtendedPlatform
  private authStorage: Record<string, string>

  constructor(authStorage: Record<string, string>, backendHost: string, platformOptions: PlatformClientOptionsType) {
    this.backendHost = backendHost;
    this.authStorage = authStorage
    const roqPlatform = new Platform(platformOptions);
    const asUser = () => {
      return roqPlatform.withBaasToken(authStorage['roq-session-token'])
    }
    this.roqPlatform = Object.assign(roqPlatform, { asUser })
  }

  public asUser() {
    return new RoqBaasSdk(this.backendHost, {
      getAccessToken: () => {
        if(this.authStorage['roq-session-token']) {
          return Promise.resolve(`Bearer ${this.authStorage['roq-session-token']}`)
        }
        return Promise.resolve()
      },
    })
  }

  public asSuperAdmin() {
    return new RoqBaasSdk(this.backendHost, {
      getAccessToken: () => Promise.resolve(`Basic ${Buffer.from(`${process.env.ROQ_ENVIRONMENT_ID}:${process.env.ROQ_API_KEY}`).toString('base64')}`)
    })
  }
}

const defaultPlatformOptions = {
  host: process.env.ROQ_PLATFORM_URL || '',
  environmentId: process.env.ROQ_ENVIRONMENT_ID || '',
  apiKey: process.env.ROQ_API_KEY || '',
}
export const createServerClient = (backendHost?: string, platformOptions: PlatformClientOptionsType = defaultPlatformOptions) => {
  const cookiesStorage = cookies()
  const authStorage = {
    'roq-session-token': cookiesStorage.get('roq-session-token')?.value!
  }
  return new RoqServerClient(authStorage, backendHost || process.env.ROQ_API_URL!, platformOptions)
}

export const createPagesServerClient = (request: NextApiRequest, backendHost?: string, platformOptions: PlatformClientOptionsType = defaultPlatformOptions) => {
  const authStorage = {
    'roq-session-token': request.cookies['roq-session-token'] as string
  }
  return new RoqServerClient(authStorage, backendHost || process.env.ROQ_API_URL!, platformOptions)
}

export const roqServerClient = createServerClient()

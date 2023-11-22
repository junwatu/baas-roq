
import { BrowserCookieAuth, RoqPlatformClient } from "@roq/client"
import { BaasAuthenticator, RoqBaasSdk } from "./roq-baas-sdk"
import { Fetcher, SWRConfiguration } from 'swr';
import { parse } from 'cookie'

export type SWRRequestOptions<Result, Error = any> = {
  disabled?: boolean;
  initialData?: Result;
} & SWRConfiguration<Result, Error, Fetcher<Result>>;

export class RoqClient extends RoqBaasSdk {
  roqPlatform: RoqPlatformClient['roqPlatform']
  signIn: RoqPlatformClient['signIn']
  signUp: RoqPlatformClient['signUp']
  signOut: RoqPlatformClient['signOut']

  constructor(backendHost: string, platformHost: string, baasAuthenticator: BaasAuthenticator) {
    super(backendHost, baasAuthenticator)
    const roqPlatformClient = new RoqPlatformClient({
      host: platformHost,
      auth: new BrowserCookieAuth()
    })
    this.roqPlatform = roqPlatformClient.roqPlatform
    this.signIn = roqPlatformClient.signIn.bind(roqPlatformClient)
    this.signUp = roqPlatformClient.signUp.bind(roqPlatformClient)
    this.signOut = roqPlatformClient.signOut.bind(roqPlatformClient)
  }
}

export const createBrowserClient = (backendHost?: string, platformHost?: string) => {
  return new RoqClient(
    backendHost || process.env.NEXT_PUBLIC_ROQ_API_URL!,
    platformHost || process.env.NEXT_PUBLIC_ROQ_PLATFORM_URL!,
    {
      getAccessToken: () => {
        const cookies = parse(document.cookie)
        return Promise.resolve(`Bearer ${cookies['roq-session-token']}`)
      },
    }
  )
}
export const roqBrowserClient = createBrowserClient()

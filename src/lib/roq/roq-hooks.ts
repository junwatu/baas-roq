
/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { SWRRequestOptions, roqBrowserClient } from './roq-client'
import { RequestOptions } from './roq-baas-sdk';
import {
  
    UserProfilesQuery,
    UserProfilesQueryVariables,
  
    UserProfileQuery,
    UserProfileQueryVariables,
  
    RolesQuery,
    RolesQueryVariables,
  
    RoleQuery,
    RoleQueryVariables,
  
    UserInvitesQuery,
    UserInvitesQueryVariables,
  
    UserInviteQuery,
    UserInviteQueryVariables,
  
    FilesQuery,
    FilesQueryVariables,
  
    FileQuery,
    FileQueryVariables,
  
    FileCategoryContentTypesQuery,
    FileCategoryContentTypesQueryVariables,
  
    FileCategoryContentGroupQuery,
    FileCategoryContentGroupQueryVariables,
  
    FileCategoryContentGroupsQuery,
    FileCategoryContentGroupsQueryVariables,
  
    FileCategoriesQuery,
    FileCategoriesQueryVariables,
  
    FileCategoryQuery,
    FileCategoryQueryVariables,
  
  useSessionStore,
} from '@roq/client';
import { useEffect } from 'react';

 
export function useCompanyFindMany<
  T extends Prisma.companyFindManyArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useCompanyFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.company.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: (swrOptions?.initialData as R) ?? (swrOptions?.fallbackData as R) ?? [],
    },
  );
}

export function useCompanyCount<T extends Prisma.companyCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useCompanyCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.company.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindManyWithCount<
  T extends Prisma.companyFindManyArgs,
  R extends { data: GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useCompanyFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.company.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData:  (swrOptions?.initialData as R) ??
      (swrOptions?.fallbackData as R) ?? { data: [], count: 0 },
    },
  );
}

export function useCompanyFindFirst<
  T extends Prisma.companyFindFirstArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useCompanyFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.company.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
 
export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: (swrOptions?.initialData as R) ?? (swrOptions?.fallbackData as R) ?? [],
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData:  (swrOptions?.initialData as R) ??
      (swrOptions?.fallbackData as R) ?? { data: [], count: 0 },
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
 
export function useCategoryFindMany<
  T extends Prisma.categoryFindManyArgs,
  R extends GetFindResult<Prisma.$categoryPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.categoryFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useCategoryFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.category.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: (swrOptions?.initialData as R) ?? (swrOptions?.fallbackData as R) ?? [],
    },
  );
}

export function useCategoryCount<T extends Prisma.categoryCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.categoryCountArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useCategoryCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.category.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCategoryFindManyWithCount<
  T extends Prisma.categoryFindManyArgs,
  R extends { data: GetFindResult<Prisma.$categoryPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.categoryFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useCategoryFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.category.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData:  (swrOptions?.initialData as R) ??
      (swrOptions?.fallbackData as R) ?? { data: [], count: 0 },
    },
  );
}

export function useCategoryFindFirst<
  T extends Prisma.categoryFindFirstArgs,
  R extends GetFindResult<Prisma.$categoryPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.categoryFindFirstArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useCategoryFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.category.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
 
export function useFreelancerFindMany<
  T extends Prisma.freelancerFindManyArgs,
  R extends GetFindResult<Prisma.$freelancerPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.freelancerFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useFreelancerFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.freelancer.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: (swrOptions?.initialData as R) ?? (swrOptions?.fallbackData as R) ?? [],
    },
  );
}

export function useFreelancerCount<T extends Prisma.freelancerCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.freelancerCountArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useFreelancerCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.freelancer.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useFreelancerFindManyWithCount<
  T extends Prisma.freelancerFindManyArgs,
  R extends { data: GetFindResult<Prisma.$freelancerPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.freelancerFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useFreelancerFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.freelancer.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData:  (swrOptions?.initialData as R) ??
      (swrOptions?.fallbackData as R) ?? { data: [], count: 0 },
    },
  );
}

export function useFreelancerFindFirst<
  T extends Prisma.freelancerFindFirstArgs,
  R extends GetFindResult<Prisma.$freelancerPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.freelancerFindFirstArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useFreelancerFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.freelancer.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
 
export function useProjectFindMany<
  T extends Prisma.projectFindManyArgs,
  R extends GetFindResult<Prisma.$projectPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.projectFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useProjectFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.project.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: (swrOptions?.initialData as R) ?? (swrOptions?.fallbackData as R) ?? [],
    },
  );
}

export function useProjectCount<T extends Prisma.projectCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.projectCountArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useProjectCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.project.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useProjectFindManyWithCount<
  T extends Prisma.projectFindManyArgs,
  R extends { data: GetFindResult<Prisma.$projectPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.projectFindManyArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useProjectFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.project.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData:  (swrOptions?.initialData as R) ??
      (swrOptions?.fallbackData as R) ?? { data: [], count: 0 },
    },
  );
}

export function useProjectFindFirst<
  T extends Prisma.projectFindFirstArgs,
  R extends GetFindResult<Prisma.$projectPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.projectFindFirstArgs>,
  roqClient = roqBrowserClient,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const key = JSON.stringify(['useProjectFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roqClient.project.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}


  
export function useRoqPlatformUserProfiles(
  args?: UserProfilesQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<UserProfilesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformUserProfiles', args || {}]);
  return useSWR<UserProfilesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.userProfiles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformUserProfile(
  args: UserProfileQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<UserProfileQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformUserProfile', args || {}]);
  return useSWR<UserProfileQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.userProfile(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformRoles(
  args?: RolesQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<RolesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformRoles', args || {}]);
  return useSWR<RolesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.roles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformRole(
  args: RoleQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<RoleQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformRole', args || {}]);
  return useSWR<RoleQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.role(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformUserInvites(
  args?: UserInvitesQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<UserInvitesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformUserInvites', args || {}]);
  return useSWR<UserInvitesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.userInvites(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformUserInvite(
  args: UserInviteQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<UserInviteQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformUserInvite', args || {}]);
  return useSWR<UserInviteQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.userInvite(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFiles(
  args?: FilesQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<FilesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFiles', args || {}]);
  return useSWR<FilesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.files(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFile(
  args: FileQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<FileQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFile', args || {}]);
  return useSWR<FileQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.file(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategoryContentTypes(
  args?: FileCategoryContentTypesQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoryContentTypesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentTypes', args || {}]);
  return useSWR<FileCategoryContentTypesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategoryContentTypes(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategoryContentGroup(
  args: FileCategoryContentGroupQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroup', args || {}]);
  return useSWR<FileCategoryContentGroupQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategoryContentGroup(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategoryContentGroups(
  args?: FileCategoryContentGroupsQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupsQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroups', args || {}]);
  return useSWR<FileCategoryContentGroupsQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategoryContentGroups(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategories(
  args?: FileCategoriesQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoriesQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategories', args || {}]);
  return useSWR<FileCategoriesQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategories(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
      
export function useRoqPlatformFileCategory(
  args: FileCategoryQueryVariables,
  roqClient = roqBrowserClient,
  swrOptions?: SWRRequestOptions<FileCategoryQuery>,
) {
  const key = JSON.stringify(['useRoqPlatformFileCategory', args || {}]);
  return useSWR<FileCategoryQuery, Error>(
    key,
    async () => {
      const result = await roqClient.roqPlatform.fileCategory(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
    

export const useSession = () => {
  const { fetchSession, session } = useSessionStore()

  useEffect(() => {
    if (session?.status === 'unauthenticated' && session?.session === undefined) {
      console.log('call fetch')
      fetchSession('/api/auth/session');
    }
  },[session?.status]);

  return session;
};

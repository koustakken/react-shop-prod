export interface IProfile {
  userId: string
  email: string
  userTag: string
  description: string
  tags: string[]
  weight: number
  height: number
}

export interface ProfileSchema {
  data?: IProfile,
  isLoading: boolean,
  error?: string
  readonly : boolean
}
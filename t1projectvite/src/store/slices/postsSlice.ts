export interface UserData {
    firstName: string
    lastName: string
    image: string
}

export interface Post {
    id: number
    reactions: number
    tags: string[]
    title: string
    userId: number
    body?: string
}

export interface PostsType {
    posts: Post[]
}
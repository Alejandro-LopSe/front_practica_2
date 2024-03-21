

export type ApiInfo = {
    data: Data[]
}
export type Data ={
    slug: string
    company_name: string
    title: string
    description: string
    remote: boolean
    url: string
    tags: string[]
    jobs_types: string[]
    location: string
    created_at: number
}
type TSiteProps = {
    title: string
    description?: string
}

type TCaseStudy = {
    id: string
    fields: {
        path: string
    }
    title: string
    workType: string
    featuredImage: {
        description: string
        fluid: object
    }
}

type TPostList = {
    [name: string]: TCaseStudy[]
}
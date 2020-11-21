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

type TPublication = {
  id: string
  name: string
  publicationWebsite: string
  publicationLogo: {
    fluid: object
  }
}

type TContentfulData = {
  [name: string]: TCaseStudy & TPublication
}

type TAllContentfulData = {
  [name: string]: {
    edges: TContentfulData[]
  }
}

type TPageGlobals = {
  data: TAllContentfulData & TContentfulData
}

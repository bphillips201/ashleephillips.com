import { FluidObject } from "gatsby-image"

export type TSiteProps = {
  title: string
  description?: string
}

export type TCaseStudy = {
  id: string
  fields: {
    path: string
  }
  title: string
  workType: string
  featuredImage: {
    description: string
    fluid: FluidObject
  }
}

export type TPublication = {
  id: string
  name: string
  publicationWebsite: string
  publicationLogo: {
    fluid: FluidObject
  }
}

export type TContentfulData = {
  [name: string]: TCaseStudy & TPublication
}

export type TAllContentfulData = {
  [name: string]: {
    edges: TContentfulData[]
  }
}

export type TPageGlobals = {
  data: TAllContentfulData & TContentfulData
}

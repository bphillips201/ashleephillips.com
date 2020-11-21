import { FluidObject } from "gatsby-image"

export type TSiteProps = {
  title: string
  description?: string
}

export type TImageFluid = {
  id: string
  fluid: FluidObject
  description?: string
  file: {
    url: string
  }
}

export type TContent = {
  id: string
  name: string
  headline: string
  title: string
  workType: string
  featuredImage: TImageFluid
  workSamples: TImageFluid[]
  publicationWebsite: string
  publicationLogo: TImageFluid
  fields: {
    path: string
  }
  company: {
    companyLogo: TImageFluid
  }
  content: {
    childMarkdownRemark: {
      html: string
    }
  }
}

export type TContentfulData = {
  [name: string]: TContent
}

export type TAllContentfulData = {
  [name: string]: {
    edges: TContentfulData[]
  }
}

export type TPageGlobals = {
  data: TAllContentfulData & TContentfulData
}

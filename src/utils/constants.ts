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

export type TCaseStudy = {
  id: string
  title: string
  workType: string
  featuredImage: TImageFluid
  workSamples: TImageFluid[]
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

export type TPublication = {
  id: string
  name: string
  publicationWebsite: string
  publicationLogo: TImageFluid
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

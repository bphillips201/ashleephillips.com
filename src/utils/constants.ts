import { FluidObject } from 'gatsby-image'

export type TSiteProps = {
  title: string
  description?: string
}

export type TImageFluid = {
  id: string
  fluid: FluidObject
  description?: string
  localFile: {
    publicURL: string
  }
}

export type TContent = {
  id: string
  name: string
  headline: string
  photoCredit: string
  publishDate: string
  title: string
  subtitle: string
  workType: string
  featuredImage: TImageFluid
  workSamples: TImageFluid[]
  publicationWebsite: string
  publicationLogo: TImageFluid
  fields: {
    path: string
  }
  publication: {
    name: string
  }
  company: {
    name: string
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

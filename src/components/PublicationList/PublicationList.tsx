import React from 'react'
import Img from 'gatsby-image'
import { TContent } from '../../utils/constants'
import * as styles from './PublicationList.module.scss'

type TPublicationListProps = {
  publications: TContent[]
}

const PublicationList: React.FC<TPublicationListProps> = props => {
  const { publications } = props

  return (
    <ul className={styles.publicationList}>
      {publications.map(pub => (
        <li key={pub.id}>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={pub.publicationWebsite}
          >
            <Img fluid={pub.publicationLogo.fluid} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default PublicationList

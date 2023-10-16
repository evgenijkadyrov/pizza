import React from "react"
import ContentLoader from "react-content-loader"

export const LoadingBlock = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >
        <circle cx="130" cy="127" r="125"/>
        <rect x="2" y="264" rx="4" ry="4" width="275" height="25"/>
        <rect x="2" y="306" rx="8" ry="8" width="275" height="85"/>
        <rect x="5" y="411" rx="7" ry="7" width="70" height="27"/>
        <rect x="109" y="404" rx="9" ry="9" width="150" height="45"/>
    </ContentLoader>
)

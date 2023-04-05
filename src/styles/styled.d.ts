import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
            title: string,
            colors: {
              primary: string,
              "primary-tint": string,
              error: string,
              highlight: string,
              dark: string,
              bright: string,
              accent: string,
              grey: string,
              "light-text": string,
              "high-emphasis":string,
              "low-emphasis": string,
            },
          
            fontSize: {
              "display-large": string,
              "display-medium": string,
              "display-small": string,
              "title-medium": string,
              "title-regular": string,
              "body-medium":string,
              "body-regular":string,
              "label-large": string,
              "label-medium": string,
              "label-smal": string,
              link: string,
            },
          
            fontWeight: {
              "display-large": string,
              "display-medium": string,
              "display-small": string,
              "title-medium": string,
              "title-regular": string,
              "body-medium": string,
              "body-regular": string,
              "label-large": string,
              "label-medium": string,
              "label-smal": string,
              link: string,
            },
          
    }
}
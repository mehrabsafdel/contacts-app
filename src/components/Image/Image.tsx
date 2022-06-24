import { IImageProps } from './interfaces';

const Image = ({largeSrc, mediumSrc, thumbnailSrc, altText } : IImageProps) => {
    return (
        <picture>
            {largeSrc && <source media="(min-width:650px)" srcSet={largeSrc}/>}
            {mediumSrc && <source media="(min-width:350px)" srcSet={mediumSrc}/>}
            <img src={thumbnailSrc} alt={altText} />
        </picture>
    )
}

export default Image;
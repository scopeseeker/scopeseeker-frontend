import Image, { ImageProps } from 'next/image'

interface Props extends ImageProps {
    alt: string
}

const MyImage: React.FC<Props> = ({ alt, ...props }) => {
    return (
        <Image
            {...props}
            alt={alt}
        />
    )
}

export default MyImage
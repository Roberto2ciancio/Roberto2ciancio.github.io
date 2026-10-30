import { useReveal } from '../hooks/useReveal'

type Props = {
  src: string
  alt: string
  caption: string
}

export default function ImageBand({ src, alt, caption }: Props) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <figure className="image-band" ref={ref} data-reveal>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption className="small muted wrap">{caption}</figcaption>
    </figure>
  )
}

export default function Landing({
/*     params,
    searchParams, */
  }: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    return <h1>My Page is {/* {params.slug} */}</h1>
  }
import React from 'react'

const OpenSearchXML = () => (<></>)

export async function getServerSideProps ({
  req: { headers: { host, referer } },
  res
}) {
  const protocol = referer.split('://')[0]

  res.setHeader('Content-Type', 'html/xml')
  res.write(`
    <?xml version="1.0" encoding="UTF-8"?>
    <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
      <ShortName>CookBook</ShortName>
      <Description>Find recipes</Description>
      <InputEncoding>UTF-8</InputEncoding>
      <Image width="16" height="16" type="image/x-icon">${protocol}://${host}/favicon.ico</Image>
      <Url type="text/html" method="get" template="${protocol}://${host}/search/query={searchTerms}"/>
    </OpenSearchDescription>
  `)
  res.end()

  return { props: {} }
}

export default OpenSearchXML

import _get from 'lodash/get'
import _has from 'lodash/has'
import React from 'react'

const OpenSearchXML = () => (<></>)

const getHost = ({ headers }) => {
  return _get(headers, 'host')
}

const getProtocol = ({ headers }) => {
  return _has(headers, 'x-forwarded-proto') ? headers['x-forwarded-proto'] :
    _has(headers, 'referer') ? headers.referer.split('://')[0] : 'http'
}

export async function getServerSideProps ({ req, res }) {
  const host = getHost(req)
  const protocol = getProtocol(req)

  res.setHeader('Content-Type', 'application/xml')
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
  <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
    <ShortName>Cookbook</ShortName>
    <Description>Find recipes</Description>
    <InputEncoding>UTF-8</InputEncoding>
    <Image width="16" height="16" type="image/x-icon">${protocol}://${host}/favicon.ico</Image>
    <Url type="text/html" method="get" template="${protocol}://${host}/search?query={searchTerms}"/>
  </OpenSearchDescription>`)
  res.end()

  return { props: {} }
}

export default OpenSearchXML

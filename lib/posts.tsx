import fs, { promises as fsPromise } from 'fs'
import path from 'path'

const getPosts = async () => {
  // current working dir: process.cwd()
  const markdownDir = path.join(process.cwd(), 'markdown')
  const fileNames = await fsPromise.readdir(markdownDir)
  return fileNames
}

export default getPosts
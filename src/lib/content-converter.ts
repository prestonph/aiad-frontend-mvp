import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { notFound } from 'next/navigation'

const rootPath = '/data/content'

const readFile = (filePath: string) => {
	return fs.readFileSync(filePath, 'utf-8')
}

const parseFrontmatter = (frontmatter: any) => {
	const frontmatterString = JSON.stringify(frontmatter)
	return JSON.parse(frontmatterString)
}

export const getMainPage = (filePath: string) => {
	const pageDataPath = path.join(rootPath, filePath)
	if (!fs.existsSync(pageDataPath)) {
		notFound()
	}
	const pageData = readFile(pageDataPath)
	const { content, data: frontmatter } = matter(pageData)
	return {
		data: parseFrontmatter(frontmatter),
		content,
	}
}

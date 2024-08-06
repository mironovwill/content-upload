export type TopicIds = {
  id: number
  topicTypeId: number
  nameRu: string
}

export type CategoriesIds = {
  name: string
  id: number
}

export type Level = {
  name: string
  id: number
}

export type LanguageId = {
  name: string
  id: number
}

export type ApiSettings = {
  baseUrl: string
  token: string
  fileUploadApi: string
  topicCreateApi: string
  uploadPresentation: string
  uploadVideo: string
  uploadScorm: string
  createBlockPlanApi: string
}

export type CsvSettings = {
  completeCsvName: string
  csvFilePatch: string
}

export type ContentStore = {
  apiSettings: ApiSettings
  csvSettings: CsvSettings
  categoryIds: CategoriesIds[]
  languageIds: LanguageId[]
  levels: Level[]
  topicTypes: TopicIds[]
}

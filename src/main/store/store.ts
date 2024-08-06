import Store from 'electron-store'
import { ContentStore } from '../types'

const store = new Store<ContentStore>({
  defaults: {
    apiSettings: {
      baseUrl: 'test',
      fileUploadApi: '/api/v1/service/file',
      topicCreateApi: '/api/v1/topic',
      uploadPresentation: '/api/v1/presentation/upload',
      uploadVideo: '/api/v1/video/upload',
      uploadScorm: '/api/v1/scorm/upload',
      token: 'string',
      createBlockPlanApi: '/api/v1/block/'
    },
    csvSettings: {
      completeCsvName: 'parsedTopics.csv',
      csvFilePatch: '../../CSV/*'
    },
    categoryIds: [
      { name: 'hard skills', id: 1008 },
      { name: 'soft skills', id: 1007 },
      { name: 'soft skills TeamLeaders', id: 10014 }
    ],
    languageIds: [
      { name: 'русский', id: 1 },
      { name: 'english', id: 2 },
      { name: 'deutsch', id: 3 },
      { name: 'français', id: 4 },
      { name: 'español', id: 5 },
      { name: 'português', id: 6 },
      { name: 'italiano', id: 7 },
      { name: 'türkçe', id: 8 },
      { name: 'bahasa', id: 9 },
      { name: '中文', id: 10 },
      { name: '日本語', id: 11 },
      { name: 'हिन्दी', id: 12 }
    ],
    levels: [
      { name: 'базовый', id: 1 },
      { name: 'средний', id: 2 },
      { name: 'продвинутый', id: 3 }
    ],
    topicTypes: [
      { id: 12, topicTypeId: 4, nameRu: 'Видео' },
      { id: 1, topicTypeId: 20, nameRu: 'Внешний курс' },
      { id: 7, topicTypeId: 16, nameRu: 'Книга' },
      { id: 2, topicTypeId: 17, nameRu: 'Корпоративный курс с согласованием' },
      { id: 2, topicTypeId: 35, nameRu: 'Корпоративный курс без согласования' },
      { id: 14, topicTypeId: 16, nameRu: 'Материал smart reading' },
      { id: 10, topicTypeId: 15, nameRu: 'Опрос' },
      { id: 13, topicTypeId: 4, nameRu: 'Подкасты' },
      { id: 4, topicTypeId: 25, nameRu: 'Обучение на рабочем месте' },
      { id: 8, topicTypeId: 15, nameRu: 'Статья' },
      { id: 9, topicTypeId: 15, nameRu: 'Тест' },
      { id: 5, topicTypeId: 1, nameRu: 'Электронный курс' }
    ]
  },
  watch: true,
  accessPropertiesByDotNotation: true
})

export default store

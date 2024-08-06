import { useState } from 'react'
import { SegmentedControl } from '@mantine/core'
import {
  IconMoodUnamused,
  IconLanguage,
  IconFileTypeCsv,
  IconChartArrowsVertical,
  IconDatabase,
  IconBookUpload,
  IconFile,
  IconFileTypography,
  IconDatabaseImport,
  IconApi
} from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const tabs = {
  uploading: [
    { link: '/parse-csv', label: 'Парсинг CSV', icon: IconFileTypeCsv },
    { link: '/prepare-topics', label: 'Подготовить топики', icon: IconFile },
    { link: '/upload-topics', label: 'Загрузить топики', icon: IconBookUpload },
    { link: '/prepare-learning', label: 'Подготовить изучения', icon: IconDatabase },
    { link: '/upload-learning', label: 'Загрузить изучения', icon: IconDatabaseImport }
  ],
  settings: [
    { link: '/categories', label: 'Категории', icon: IconMoodUnamused },
    { link: '/languages', label: 'Языки', icon: IconLanguage },
    { link: '/levels', label: 'Уровни', icon: IconChartArrowsVertical },
    { link: '/topic-types', label: 'Типы топиков', icon: IconFileTypography },
    { link: '/api', label: 'API', icon: IconApi }
  ]
}

const controlData = [
  { label: 'Загрузка', value: 'uploading' },
  { label: 'Настройки', value: 'settings' }
]

export default function Navbar(): JSX.Element {
  const [section, setSection] = useState<'uploading' | 'settings'>('uploading')
  const [active, setActive] = useState('Парсинг CSV')

  const links = tabs[section].map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ))

  return (
    <nav className={classes.navbar}>
      <div>
        <SegmentedControl
          value={section}
          onChange={(value: any) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={controlData}
        />
      </div>

      <div className={classes.navbarMain}>{links}</div>
    </nav>
  )
}

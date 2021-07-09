export const config = {
  id: 'app',
  type: 'root',
  children: [
    {
      id: 'name',
      type: 'string',
      label: '프로젝트 이름',
      defaultValue: ''
    },
    {
      id: 'project',
      type: 'group',
      label: '프로젝트 연결',
      children: [
        {
          id: 'url',
          type: 'string',
          defaultValue: 'https://'
        },
        {
          id: 'version',
          type: 'select',
          option: [
            { id: 'old', label: '구버전' },
            { id: 'custom', label: '커스텀' },
            { id: 'editor', label: '에디터' }
          ]
        }
      ]
    },
    {
      id: 'width',
      type: 'number',
      label: '뷰포트 width',
      defaultValue: 1080
    },
    {
      id: 'string-list',
      type: 'list',
      label: '텍스트 리스트',
      item: {
        id: 'item1',
        type: 'string'
      }
    },
    {
      id: 'group-list',
      type: 'list',
      label: '그룹 리스트',
      item: {
        id: 'item1',
        type: 'group',
        children: [
          {
            id: 'template',
            type: 'radio',
            option: [
              { label: '일반', value: 'default' },
              { label: '반분할', value: 'half' },
              { label: '사분할', value: 'quarter' }
            ]
          },
          {
            id: 'name',
            label: '이름 설정',
            type: 'string',
            defaultValue: 'SNS 사진'
          },
          {
            id: 'size',
            label: '사이즈 설정',
            type: 'group',
            children: [
              {
                id: 'width',
                label: '너비',
                type: 'number',
                defaultValue: 1080
              },
              {
                id: 'height',
                label: '높이',
                type: 'number',
                defaultValue: 1920
              }
            ]
          }
        ]
      }
    }
  ]
}
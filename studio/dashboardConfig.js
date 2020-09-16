export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f620ca5eddcf3364d85207b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1iz6ruh9',
                  apiId: '6cf4ad7c-2766-4973-9842-683deaf208e1'
                },
                {
                  buildHookId: '5f620ca6eddcf337c4851c42',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yb6r2ovo',
                  apiId: '34703329-aba2-4c8c-8e71-a90a076218b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luettgau/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yb6r2ovo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

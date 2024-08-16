import type { AppConfigInput } from 'nuxt/schema';

export default defineAppConfig({
    awesome: {
        name: 'HuuPB',
        description: 'with Nuxt3.',
        project: {
            links: {
                github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
            },
        },
        layout: {
            page: {
                navbar: {
                    menus: [
                        {
                            type: 'link',
                            title: 'About',
                            to: { name: 'about' },
                        },
                        {
                            type: 'link',
                            title: 'Experience',
                            to: { name: 'experience' },
                        },
                        {
                            type: 'link',
                            title: 'Project',
                            to: { name: 'project' },
                        },
                        // {
                        //     type: 'dropdown',
                        //     title: 'Documentations',
                        //     children: [
                        //         {
                        //             type: 'link',
                        //             title: 'Components',
                        //             to: { name: 'docs-components' },
                        //         },
                        //     ],
                        // },
                        // {
                        //     type: 'button',
                        //     title: 'Setting',
                        //     to: { name: 'setting' },
                        // },
                        // dynamic title
                        // {
                        //   type: 'button',
                        //   title: (nuxt) =>
                        //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
                        //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
                        // },
                    ],
                },
            },
            footer: {
                year: new Date().getFullYear(),
            },
            welcome: {
                title: 'My&nbsp;Portfolio',
                disableInfoReplaceIndexInWelcomePage: true,
            },
        },
        author: {
            name: 'HuuPB',
            links: {
                github: 'https://github.com/viandwi24',
                medium: 'https://viandwi24.medium.com',
                website: 'https://viandwi24.site',
            },
        },
    },
});

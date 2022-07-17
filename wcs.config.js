module.exports = {
    /**
     * Configures default paths for new component and template files.
     * Refer to https://component-studio.wixanswers.com/en/article/kb20017 for more information.
     */

    newComponent: {
        /* This path is required to create new components through WCS. */
        componentsPath: 'src',
        /* This path is only required when using custom templates. */
        templatesPath: 'src/wcs-component-templates',
    },

    /**
     * Scopes component discovery. Use include/exclude glob patterns to configure the search scope.
     * Refer to https://component-studio.wixanswers.com/en/article/kb17226 for more information.
     */

    componentsDiscovery: {
        include: ['src/**'],
        exclude: ['src/wcs-component-templates/**'],
    },

    /**
     * Specifies modules to evaluate before rendering any boards in your project.
     * Refer to https://component-studio.wixanswers.com/en/article/kb14533 for more information.
     */

    boardGlobalSetup: './src/boards-global-setup.ts',

    /**
     * Configures scripts for project users to run from WCS (triggerable and on demand).
     * Refer to https://component-studio.wixanswers.com/en/article/kb36621 for more information.
     */

    scripts: {
        install: {
            title: 'Install',
            description: 'Run install',
            command: 'npm i',
            trigger: ['checkout', 'pull', 'setup'],
        },
    },

    /**
     * Formats code styling in WCS code drawer.
     * Refer to https://component-studio.wixanswers.com/en/article/kb20820 for more information.
     */

    //   formatting: {
    //     formattingFile: {},
    //     formatSettings: {},
    //   },

    /**
     * Specifies project folders to exclude from component search.
     * Refer to https://component-studio.wixanswers.com/en/article/kb16622 for more information.
     */

    //   ignoredSubPaths: [],

    /**
     * Includes board files with file extensions other than '.board.ts(x)'.
     * Refer to https://component-studio.wixanswers.com/en/article/kb28022 for more information.
     */

    //   boardExtensions: [".board.ts", ".board.tsx", ".custom.tsx"],

    /**
     * Default directory for new boards, relative to the project root.
     * Refer to https://component-studio.wixanswers.com/kb/en/article/kb22014 for more information.
     */

    //   boardsPath: "src/components",

    /**
     * Adds Sass Support to Compilations
     * Refer to https://component-studio.wixanswers.com/en/article/kb12816 for more information.
     */

    //   sassCompilation: {
    //     modules: {},
    //     compilerRuntime: "auto",
    //     resolveUrls: true,
    //   },

    /**
     * Includes package assets from additional sources, and creates aliases and fallbacks.
     * Refer to https://component-studio.wixanswers.com/en/article/kb26734 for more information.
     */

    //   resolve: {
    //     packageRoots: [path.join(__dirname, "client", "src"), "node_modules"],
    //     alias: {},
    //     fallback: {},
    //   },

    /**
     * Enables CSS modules in your project.
     * Refer to https://component-studio.wixanswers.com/en/article/kb22420 for more information.
     */

    //   cssCompilation: {
    //     activateCssModules: true,
    //     cssModulesExt: [".module.css"],
    //   },

    /**
     * Configures how SVG assets load in WCS.
     * Refer to https://component-studio.wixanswers.com/en/article/kb38231 for more information.
     */

    //   svgLoader: "both",

    /**
     * Configures file-naming convention for new component creation.
     * Refer to https://component-studio.wixanswers.com/en/article/kb20131 for more information.
     * Options: 'pascal-case', 'camel-case', 'kebab-case' (default)
     */

    //   fileNamingConvention: "pascal-case",

    /**
     * Configures maximum rendered elements.
     * Refer to https://component-studio.wixanswers.com/en/article/kb34628 for more information.
     */

    //   safeRender: {
    //     maxInstancesPerComponent: 250,
    //   },

    /**
     * Configure the rendering environment
     * Refer to https://component-studio.wixanswers.com/en/article/kb27825 for more information.
     */

    //   previewConfiguration: {
    //     environmentVariables: {},
    //   },
};

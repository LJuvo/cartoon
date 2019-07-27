export const appRouter = {
    path: "/",
    name: "root",
    component: () =>
        import ("../views"),
    redirect: "/recommend",
    children: [{
            path: "recommend",
            icon: "ios-home",
            name: "推荐",
            component: () =>
                import ("../views/recommend/")
        },
        {
            path: "follow",
            icon: "ios-heart",
            name: "关注",
            component: () =>
                import ("../views/follow/")
        },
        {
            path: "bookshelf",
            icon: "ios-book",
            name: "书架",
            component: () =>
                import ("../views/bookshelf/")
        },
        {
            path: "mine",
            icon: "md-person",
            name: "我",
            component: () =>
                import ("../views/mine/")
        }
    ]
};

export const commonRouters = [{
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/login")
    },
    {
        path: "/403",
        name: "403",
        props: {
            type: "403"
        },
        component: () =>
            import ("../views/error")
    },
    {
        path: "/404",
        name: "404",
        props: {
            type: "404"
        },
        component: () =>
            import ("../views/error/404")
    },
    {
        path: "/500",
        name: "500",
        props: {
            type: "500"
        },
        component: () =>
            import ("../views/error")
    },
    {
        path: "/*",
        name: "error-404",
        redirect: "/404"
    }
];

export const routers = [appRouter, ...commonRouters];
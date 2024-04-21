/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// lazy load controller
const PagesController = () => import('#controllers/pages_controller')
const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/home', async ({view}) => {
    return view.render('pages/home')
})

router.get('/register', async ({view}) => {
    return view.render('pages/register')
})

router.get('/about', [PagesController, 'about'])
router.get('/list', [PagesController, 'list'])
// // user route
// router.post('/user', [UsersController, 'create'])

router.resource('user', UsersController)
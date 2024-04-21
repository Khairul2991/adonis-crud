import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async home({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async about({view}: HttpContext) {
    return view.render('pages/about')
  }

  async list({ view }: HttpContext) {
    const users = await User.query().orderBy('id', 'asc')
    return view.render('pages/list', { users: users })
  }
}

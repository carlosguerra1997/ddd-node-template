import Entity from '@shared/Domain/Entity'

class User extends Entity {
  public name: string
  public email: string
  public age: number

  constructor (user: Partial<User>) {
    super(user)
    Object.assign(this, user)
  }

  public static make (data: Partial<User>): User {
    const { name, email, age } = data
    const user = new User({ name, email, age })
    return user
  }
}

export default User
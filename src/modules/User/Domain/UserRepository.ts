import User from './User'

export interface IUserRepository {
  delete(id: string): Promise<void>
  save(user: User): Promise<void>
  searchById(id: string): Promise<User | null>
  searchByEmail(email: string): Promise<User | null>
  update(id: string, user: User): Promise<void>
}

export default IUserRepository
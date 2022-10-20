import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepositories: CategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const allCategories = await this.categoriesRepositories.list();

    return allCategories;
  }
}

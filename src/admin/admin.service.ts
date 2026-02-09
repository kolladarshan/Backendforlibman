import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, Repository } from 'typeorm';
import { AdminEntity } from './entities/admin.entity';
import { AdminSignup } from './dto/user-signup.dto';
@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private Adminrepository : Repository<AdminEntity >,
  ){}
   async signup(AdminSignup:AdminSignup):Promise<AdminEntity>{
    const admin=this.Adminrepository.create(AdminSignup);
    return await this.Adminrepository.save(admin)
  }
  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}

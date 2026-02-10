import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin, Repository } from 'typeorm';
import { AdminEntity } from './entities/admin.entity';
import { AdminSignup } from './dto/user-signup.dto';
import { Hash } from 'bcrypt';
import { adminsignin } from './dto/admin-signnin.dto';
@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private Adminrepository : Repository<AdminEntity >,
  ){}
   async signup(AdminSignup:AdminSignup):Promise<AdminEntity>{
    const adminExists= await this.FindAdminByEmail(AdminSignup.email)
    if(adminExists) throw new BadRequestException('Email is not avail .')
    AdminSignup.password=await Hash(AdminSignup.password,10)
    let admin=this.Adminrepository.create(AdminSignup);
    admin= await this.Adminrepository.save(admin)
    const { password, ...safeAdmin } = admin;
    return safeAdmin as AdminEntity;

  }
  async signin(adminsignin:adminsignin)
  {
    const adminExists=await this.FindAdminByEmail(adminsignin.email)
    if(adminExists) throw  new BadRequestException('email not available')
      return adminExists;
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
  async FindAdminByEmail(email:string){
    return await this.Adminrepository.findOneBy({email})
  }
  async accessToken(admin:AdminEntity)
  return sign({id:adminsignin.id,email:adminsignin.email},process.env.ACCESS_TOKEN_KEY,{expriesIn:process.env.ACCESS_TOKEN_TIME})
}

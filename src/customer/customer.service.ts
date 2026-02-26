import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ) {}

  async create(createCustomerDto: CreateCustomerDto){
    return await this.customerModel.create(
      createCustomerDto as Partial<Customer>,
    );
  }

  async findAll() {
    return await this.customerModel.findAll();
  }

  async findOne(id: number) {
    return await this.customerModel.findByPk(+id);
  }

  async findFullname (fullname: string) {
    return await this.customerModel.findOne({
      where: {
        fullname: fullname,
      },
    });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    //update -> return array of record
    return await this.customerModel.update(updateCustomerDto, {
      where: {id:id},
    });
  }

  async remove(id: number) {
    // destroy -> return number of record
    return await this.customerModel.destroy({
      where: {id:id},
    });
  }
}

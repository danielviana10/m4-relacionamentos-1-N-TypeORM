import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Pets } from "./pets.entity";

@Entity('owners')
class Owner{

    @PrimaryGeneratedColumn()
    id: string;

    @PrimaryColumn()
    name: string;

    @Column()
    email: string;

    @Column()
    pets: Array<Pets>;

}

export { Owner }
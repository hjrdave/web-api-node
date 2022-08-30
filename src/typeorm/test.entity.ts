import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Test {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'test_id',
    })
    id: number;

    @Column({
        name: 'test_title',
        type: 'text',
        nullable: false,
        default: '',
    })
    title: string;

    @Column({
        name: 'test_description',
        type: 'text',
        nullable: false,
        default: '',
    })
    description: string;

    @Column({
        name: 'test_rating',
        nullable: false,
        default: '',
    })
    rating: string;


}
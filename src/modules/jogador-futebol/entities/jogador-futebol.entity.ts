import { Column, Entity } from 'typeorm';

@Entity('jogador_futebol')
export class JogadorFutebolEntity {
    @Column({ type: 'uuid', nullable: false })
    tenantid: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: true })
    client_id?: string;

    @Column({ nullable: true })
    authority?: string;

    @Column({ nullable: true })
    client_secret?: string;

    @Column({ nullable: false })
    protocol: string;

    @Column({ nullable: false })
    encryption: string;

    @Column({ nullable: false })
    auth_type: string;

    @Column({ nullable: true })
    server_name?: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ nullable: false })
    port: number;

    @Column({ nullable: true, type: 'timestamp' })
    start_date?: string;
}
import { UserCredentials } from 'src/auth/credential.entity';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/createSkill.dto';
import { FilterSkillDto } from './dto/filter-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { UserSkills } from './user-skills.entity';
export declare class SkillsService {
    private skillsRepository;
    constructor(skillsRepository: Repository<UserSkills>);
    createSkills(createSkillDto: CreateSkillDto, userCredentials: UserCredentials): Promise<UserSkills[]>;
    getSkills(filterSkillDto: FilterSkillDto, userCredentials: UserCredentials): Promise<UserSkills[]>;
    getSkillById(id: number, userCredentials: UserCredentials): Promise<UserSkills>;
    deleteSkillById(id: number, userCredentials: UserCredentials): Promise<void>;
    updateSkill(id: number, updateSkillDto: UpdateSkillDto, userCredentials: UserCredentials): Promise<UserSkills>;
}

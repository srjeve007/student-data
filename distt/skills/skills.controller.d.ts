import { UserCredentials } from 'src/auth/credential.entity';
import { CreateSkillDto } from './dto/createSkill.dto';
import { FilterSkillDto } from './dto/filter-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { SkillsService } from './skills.service';
import { UserSkills } from './user-skills.entity';
export declare class SkillsController {
    private skillsService;
    constructor(skillsService: SkillsService);
    createSkills(createSkillDto: CreateSkillDto, userCredentials: UserCredentials): Promise<UserSkills[]>;
    getSkills(filterSkillDto: FilterSkillDto, userCredentials: UserCredentials): Promise<UserSkills[]>;
    getSkillById(id: number, userCredentials: UserCredentials): Promise<UserSkills>;
    deleteSkillById(id: number, userCredentials: UserCredentials): Promise<void>;
    updateSkill(id: number, updateSkillDto: UpdateSkillDto, userCredentials: UserCredentials): Promise<UserSkills>;
}

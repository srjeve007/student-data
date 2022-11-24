import { UserCredentials } from 'src/auth/credential.entity';
import { CreateExperienceDto } from './dto/experience.dto';
import { FilterExperienceDto } from './dto/filter-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './experience.entity';
import { ExperienceService } from './experience.service';
export declare class ExperienceController {
    private experienceService;
    constructor(experienceService: ExperienceService);
    createExperience(createExperienceDto: CreateExperienceDto, userCredentials: UserCredentials): Promise<Experience[]>;
    getEducation(filterExperienceDto: FilterExperienceDto, userCredentials: UserCredentials): Promise<Experience[]>;
    getExperienceById(id: number, userCredentials: UserCredentials): Promise<Experience>;
    deleteEducationById(id: number, userCredentials: UserCredentials): Promise<void>;
    updateExperience(id: number, updateExperienceDto: UpdateExperienceDto, userCredentials: UserCredentials): Promise<Experience>;
}

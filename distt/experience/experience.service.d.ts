import { UserCredentials } from 'src/auth/credential.entity';
import { Repository } from 'typeorm';
import { CreateExperienceDto } from './dto/experience.dto';
import { FilterExperienceDto } from './dto/filter-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './experience.entity';
export declare class ExperienceService {
    private experienceRepository;
    constructor(experienceRepository: Repository<Experience>);
    createExperience(createExperienceDto: CreateExperienceDto, userCredentials: UserCredentials): Promise<Experience[]>;
    getExperience(filterExperienceDto: FilterExperienceDto, userCredentials: UserCredentials): Promise<Experience[]>;
    getExperienceById(id: number, userCredentials: UserCredentials): Promise<Experience>;
    deleteExperienceById(id: number, userCredentials: UserCredentials): Promise<void>;
    updateExperience(id: number, updateExperienceDto: UpdateExperienceDto, userCredentials: UserCredentials): Promise<Experience>;
}

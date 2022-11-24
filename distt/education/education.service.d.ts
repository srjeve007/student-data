import { UserCredentials } from 'src/auth/credential.entity';
import { Repository } from 'typeorm';
import { CreateEducationDto } from './dto/education.dto';
import { FilterEducationDto } from './dto/filter-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './education.entity';
export declare class EducationService {
    private educationRepository;
    constructor(educationRepository: Repository<Education>);
    createEducation(createEducationDto: CreateEducationDto, userCredentials: UserCredentials): Promise<Education[]>;
    getEducation(filterEducationDto: FilterEducationDto, userCredentials: UserCredentials): Promise<Education[]>;
    getEducationById(id: number, userCredentials: UserCredentials): Promise<Education>;
    deleteEducationById(id: number, userCredentials: UserCredentials): Promise<void>;
    updateEducation(id: number, updateEducationDto: UpdateEducationDto, userCredentials: UserCredentials): Promise<Education>;
}

import { Observable } from 'rxjs';

import { ZipTaskProgress } from './zip-task-progress.model';

export interface ZipTask<T = Blob> {
    progress: Observable<ZipTaskProgress>;
    data: Observable<T>;
}

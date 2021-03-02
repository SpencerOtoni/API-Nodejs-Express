import Bee from 'bee-queue'
import SendMail from '../jobs/SendMail'
import redisConfig from '../config/redis'

const jobs = [SendMail]

class Queue {
    private queues: object

    constructor(){
        this.queues = {};

        this.init();
        
    }

    init(){
        jobs.forEach(({ key, handle }) => {
            this.queues[key] = {
                bee: new Bee(key, {
                    redis: redisConfig
                }),
                handle,
            };
        });
    }

    add(queue: string, job: object) {
        return this.queues[queue].bee.createJob(job).save()
    }

    processQueue(){
        jobs.forEach((job) => {
            const { bee, handle } = this.queues[job.key]

            bee.on('failed', this.handleFailure).process(handle)
        })
    }

    handleFailure(job: object, err: string){
        console.log(`Queue ${job}: FAILED`, err)
    }

}

export default new Queue()
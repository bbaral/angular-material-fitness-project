import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Exercise} from '../../model/exercise.model';
import {TrainingService} from '../../service/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];
  displayedColumns: string[] = ['name', 'level'];

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}

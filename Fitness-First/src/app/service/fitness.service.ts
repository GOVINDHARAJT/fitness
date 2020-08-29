import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FitnessService {
  private url = 'http://localhost:8080/v1/fitness';
  constructor(private http: HttpClient) { }


  getAllFitness(): Observable<any> {
    return this.http.get(`${this.url}/retriveFitness`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getfitnessById(fitnessId: number): Observable<any> {
    return this.http.get(`${this.url}/retriveFitness/FitnessById/${fitnessId}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getfitnessByexcercisename(excerciseName: string): Observable<any> {
    return this.http.get(`${this.url}/retriveExcerciseName/${excerciseName}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getfitnessByworkouttype(workouttype: string): Observable<any> {
    return this.http.get(`${this.url}/retriveWorkoutType/${workouttype}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getfitnessBysubtypeofWorkout(subtypeofWorkout: string): Observable<any> {
    return this.http.get(`${this.url}/retriveSubtypeofWorkout/${subtypeofWorkout}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getfitnessByduration(duration: number): Observable<any> {
    return this.http.get(`${this.url}/retriveFitnessDuration/${duration}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getfitnessByrating(rating: number): Observable<any> {
    return this.http.get(`${this.url}/retriveRating/${rating}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getworkoutTypeAndSubtypeofWorkout(type: string, subtype: string): any {
    return this.http.get(`${this.url}/workoutTypeAndSubtypeofWorkout/WorkoutType/${type}/SubtypeofWorkout/${subtype}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getworkoutTypeAndDuration(type: string, duration: number): any {
    return this.http.get(`${this.url}/workoutTypeAndDuration/WorkoutType/${type}/Duration/${duration}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getworkoutTypeAndRating(type: string, rating: number): any {
    return this.http.get(`${this.url}/workoutTypeAndRating/WorkoutType/${type}/Rating/${rating}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getsubtypeofWorkoutAndRating(subtype: string, rating: number): any {
    return this.http.get(`${this.url}/subtypeofWorkoutAndRating/SubtypeofWorkout/${subtype}/Rating/${rating}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getfitnessBydurationLessThanEqual(duration: number): Observable<any> {
    return this.http.get(`${this.url}/retrivedurationLessThanEqual/${duration}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }

}

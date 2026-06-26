export class Timer {
  private _time: number = 0;

  public get time(): number {
    return this._time;
  }

  private spendConstant(time: number): void {
    this._time += time;
    const ex = Math.abs(this._time % 1);
    if (ex < 0.001) {
      this._time = Math.round(this._time);
    }
  }

  public spend(time: number): void {
    this.spendConstant(time);
  }

  public spendToWhole(): void {
    this._time = Math.ceil(this._time);
  }

  public postpone(now: number, time: number): void {
    if (this._time < now + time) {
      this._time = now + time;
      const ex = Math.abs(this._time % 1);
      if (ex < 0.001) {
        this._time = Math.round(this._time);
      }
    }
  }

  public cooldown(now: number): number {
    return this._time - now;
  }

  public clearTime(now: number): void {
    this.spendConstant(-now);
  }

  public timeToNow(now: number): void {
    this._time = now;
  }

  public diactivate(): void {
    this._time = Number.MAX_VALUE;
  }
}

import React from 'react';

const CreatepostView = () => {

  return (
    <div className='container mt-5 bg-light rounded'>
      <form className='p-4'>
        <div className="form mb-4">
          <label className="form-label" for="form4Example1">title</label>
          <input type="text" id="form4Example1" className="form-control" />
        </div>

        <div class="form datetimepicker">
          <label for="datetimepickerExample" class="form-label">Date and Time (year-month-date 00:00:00)</label>
          <input type="text" class="form-control" id="datetimepickerExample" />
        </div>

        <div className="form mb-4">
          <label className="form-label" for="form4Example3">More information</label>
          <textarea className="form-control" id="form4Example3" rows="4"></textarea>
        </div>

        <button type="submit" className="btn btn-dark btn-block mb-4">Add event</button>
      </form>

    </div>
  )
}

export default CreatepostView
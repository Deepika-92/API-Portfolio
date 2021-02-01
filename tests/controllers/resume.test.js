/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  before, afterEach, beforeEach, describe, it
} = require('mocha')
const { resumeList, singleResume } = require('../mocks/resume')
const { getAllResume, getExpById, createNewResume } = require('../../controllers/resume')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - resume', () => {
  let sandbox
  let stubbedFindAll
  let stubbedFindOne
  let stubbedCreate
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusSend
  let stubbedStatus

  before(() => {
    sandbox = sinon.createSandbox()

    stubbedFindOne = sandbox.stub(models.resume, 'findOne')
    stubbedFindAll = sinon.stub(models.resume, 'findAll')
    stubbedCreate = sinon.stub(models.resume, 'create')

    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusSend = sandbox.stub()
    stubbedStatus = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })
  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusSend })
  })

  afterEach(() => {
    sandbox.reset()
  })



  describe('getAllResume', () => {
    it('retrieves list of resume from database and calls response.send() with list', async () => {
      stubbedFindAll.returns(resumeList)
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getAllResume({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(resumeList)
    })
    it('returns a 500 when no resume is found', async () => {
      stubbedFindAll.throws('ERROR!')

      await getAllResume({}, response)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Sorry resume could not found')
    })
  })

  describe('getExpById', () => {
    it('retrieves resume associated with provided id from database and calls response.send with it', async () => {
      const request = { params: { id: '1' } }
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      stubbedFindOne.returns(singleResume)

      await getExpById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: '1' } })
      expect(stubbedSend).to.have.been.calledWith(singleResume)
    })

    it('returns a 404 when no resume is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { id: 'not-found' } }


      await getExpById(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 'not-found' } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })
    it('returns a 500 when no resume is found', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { id: 'not-found' } }


      await getExpById(request, response)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 'not-found' } })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Sorry resume by id could  not found')
    })
  })
  describe('createNewResume', () => {
    it('accepts and saves new villain details as new resume, returning the saved record with a 201 status', async () => {
      const request = { body: singleResume }
      const stubbedStatusDotSend = sinon.stub()
      const stubbedStatus = sinon.stub().returns({ send: stubbedStatusDotSend })
      const response = { status: stubbedStatus }

      stubbedCreate.returns(singleResume)

      await createNewResume(request, response)

      expect(stubbedCreate).to.have.been.calledWith(singleResume)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedStatusDotSend).to.have.been.calledWith(singleResume)
    })
    it('returns a 500 when no resume is found', async () => {
      stubbedCreate.throws('ERROR!')
      const request = { body: singleResume }


      await createNewResume(request, response)
      expect(stubbedCreate).to.have.been.calledWith(singleResume)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Sorry new resume could not found')
    })
  })
})

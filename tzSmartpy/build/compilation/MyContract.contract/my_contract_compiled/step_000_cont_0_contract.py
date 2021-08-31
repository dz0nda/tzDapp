import smartpy as sp

class Contract(sp.Contract):
  def __init__(self):
    self.init_type(sp.TRecord(storedValue = sp.TNat).layout("storedValue"))
    self.init(storedValue = 1)

  @sp.entry_point
  def store(self, params):
    sp.set_type(params, sp.TNat)
    self.data.storedValue = params